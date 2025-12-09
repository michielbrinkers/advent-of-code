const https = require('https');
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);

// Try to load .env
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
	const envConfig = fs.readFileSync(envPath, 'utf8');
	envConfig.split('\n').forEach(line => {
		const [key, value] = line.split('=');
		if (key && value) {
			process.env[key.trim()] = value.trim();
		}
	});
}

const year = args[0];
const startDay = parseInt(args[1], 10);
const endDay = args[2] ? parseInt(args[2], 10) : startDay;

if (!year || !startDay) {
	console.error('Usage: node scaffold.js <year> <day> [end_day]');
	process.exit(1);
}

const session = process.env.AOC_SESSION;
if (!session) {
	console.warn('Warning: AOC_SESSION environment variable not set. Input files will be empty.');
}

const yearDir = path.join(__dirname, year);

if (!fs.existsSync(yearDir)) {
	fs.mkdirSync(yearDir);
	console.log(`Created directory: ${yearDir}`);
}

async function fetchInput(year, day) {
	if (!session) return '';

	return new Promise((resolve, reject) => {
		const options = {
			hostname: 'adventofcode.com',
			path: `/${year}/day/${day}/input`,
			method: 'GET',
			headers: {
				'Cookie': `session=${session}`,
				'User-Agent': 'github.com/michielbrinkers/advent-of-code'
			}
		};

		const req = https.request(options, (res) => {
			if (res.statusCode !== 200) {
				console.error(`Failed to fetch input for day ${day}: Status Code ${res.statusCode}`);
				resolve(''); // Resolve with empty string on failure to allow script to continue
				return;
			}

			let data = '';
			res.on('data', (chunk) => {
				data += chunk;
			});

			res.on('end', () => {
				resolve(data);
			});
		});

		req.on('error', (e) => {
			console.error(`Error fetching input for day ${day}: ${e.message}`);
			resolve('');
		});

		req.end();
	});
}

(async () => {
	for (let i = startDay; i <= endDay; i++) {
		const dayDir = path.join(yearDir, `day_${i}`);
		if (!fs.existsSync(dayDir)) {
			fs.mkdirSync(dayDir, { recursive: true });
			console.log(`Created directory: ${dayDir}`);
		}

		const txtFile = path.join(dayDir, `input${i}.txt`);
		if (!fs.existsSync(txtFile)) {
			const inputData = await fetchInput(year, i);
			if (inputData) {
				fs.writeFileSync(txtFile, inputData);
				console.log(`Created file: ${txtFile}`);
			}
		}

		const exampleFile = path.join(dayDir, `example${i}.txt`);
		if (!fs.existsSync(exampleFile)) {
			fs.writeFileSync(exampleFile, "");
			console.log(`Created file: ${exampleFile}`);
		}

		const jsContent = `// https://adventofcode.com/${year}/day/${i}
const fs = require('fs');
const use_example = true;
const input = fs.readFileSync(\`\${use_example ? "example" : "input"}${i}.txt\`, 'utf8');

`;

		const pyContent = `# https://adventofcode.com/2025/day/6
use_example = True
with open("input${i}.txt" if not use_example else "example${i}.txt", "r") as file:
	lines = file.read().splitlines()

`;
		["a", "b"].forEach(char => {
			Object.entries({ js: jsContent, py: pyContent }).forEach(kv => {
				const file = path.join(dayDir, `day${i}${char}.${kv[0]}`);
				if (!fs.existsSync(file)) {
					fs.writeFileSync(file, kv[1]);
					console.log(`Created file: ${file}`);
				}
			});
		});
	}
	console.log('Scaffolding complete.');
})();
