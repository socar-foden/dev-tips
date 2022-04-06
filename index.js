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
    const { stdout } = await execute(`git branch -r --contains 1184cbbdeaee93994a40b3e2495a363c40821086`);
    console.log(stdout)
}

test();