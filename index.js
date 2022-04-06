const { promisify } = require('util');
const { exec } = require('child_process');

const execPromise = promisify(exec);

const execute = async (command) => {
    try {
      return await execPromise(command);
    } catch (error) {
      if (error.stdout === '') {
        return { stdout: '', stderr: '' };
      }
      if (error.stderr) {
        throw error.stderr;
      }
    }
  };

const test = async () => {
    const { stdout } = await execute(`git branch -r --contains 5a4505a`);
    console.log(stdout)
}

test();