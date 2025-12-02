const https = require('https');
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);

const INVALID_INPUT = "Please don't repeatedly request this endpoint before it unlocks! The calendar countdown is synchronized with the server time; the link will be enabled on the calendar the instant this puzzle becomes available.";

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
				'User-Agent': 'github.com/michielbrinkers/advent-of-code by michielbrinkers@gmail.com'
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
			if (inputData !== INVALID_INPUT) {
				fs.writeFileSync(txtFile, inputData);
				console.log(`Created file: ${txtFile}`);
			}
			else {
				console.log(`Input file ${i} not ready for download`);
			}
		}

		const jsContent = `// https://adventofcode.com/${year}/day/${i}
const fs = require('fs');
const input = fs.readFileSync('./input${i}.txt', 'utf8');
`;

		const jsFileA = path.join(dayDir, `day${i}a.js`);
		if (!fs.existsSync(jsFileA)) {
			fs.writeFileSync(jsFileA, jsContent);
			console.log(`Created file: ${jsFileA}`);
		}

		const jsFileB = path.join(dayDir, `day${i}b.js`);
		if (!fs.existsSync(jsFileB)) {
			fs.writeFileSync(jsFileB, jsContent);
			console.log(`Created file: ${jsFileB}`);
		}
	}
	console.log('Scaffolding complete.');
})();
