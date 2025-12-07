import os
import sys
import time
import subprocess

POLL_INTERVAL = 1.0  # seconds

def find_watch_files(root_dir: str) -> list[str]:
    """Return a list of all .py files under root_dir (recursively)."""
    watch_files = []
    for dirpath, dirnames, filenames in os.walk(root_dir):
        for name in filenames:
            if not (name.endswith((".py", ".js")) and 'day' in name):
                continue
            full_path = os.path.join(dirpath, name)
            # Don't watch the watcher itself
            if os.path.abspath(full_path) == os.path.abspath(__file__):
                continue
            watch_files.append(full_path)
    return watch_files


def build_mtime_map(root_dir: str) -> dict[str, float]:
    """Map file path → last modification time."""
    mtimes: dict[str, float] = {}
    for path in find_watch_files(root_dir):
        try:
            mtimes[path] = os.path.getmtime(path)
        except FileNotFoundError:
            # File might have been deleted between walk and stat – ignore
            pass
    return mtimes


def run_script(path: str) -> None:
    """Run a Python file, using its own directory as the working directory."""
    script_path = os.path.abspath(path)
    script_dir = os.path.dirname(script_path)
    script_file = os.path.basename(script_path)

    start = time.perf_counter()
    print(f"\n=== Running: {script_file} ===")
    result = subprocess.run(
        [sys.executable if script_file.endswith(".py") else 'node', script_file],
        cwd=script_dir,
    )
    print(f"=== Finished {script_file} in {time.perf_counter() - start:.4f} ===\n")


def main() -> None:
    if len(sys.argv) > 1:
        root = os.path.abspath(sys.argv[1])
    else:
        root = os.getcwd()

    print(f"Watching all .py files under: {root}")
    mtimes = build_mtime_map(root)

    try:
        while True:
            # Re-scan tree to pick up new .py files as well
            current_mtimes = build_mtime_map(root)

            # Check for new or modified files
            for path, mtime in current_mtimes.items():
                prev_mtime = mtimes.get(path)
                if prev_mtime is None or mtime > prev_mtime:
                    run_script(path)

            mtimes = current_mtimes
            time.sleep(POLL_INTERVAL)
    except KeyboardInterrupt:
        print("\nStopping watcher.")


if __name__ == "__main__":
    main()
