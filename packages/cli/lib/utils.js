const readline = require('readline')
const exec = require('child_process').execSync

exports.exit = (code = 1) => {
  process.exit(code)
}

exports.clearConsole = (title) => {
  if (process.stdout.isTTY) {
    const blank = '\n'.repeat(process.stdout.rows)
    console.log(blank)
    readline.cursorTo(process.stdout, 0, 0)
    readline.clearScreenDown(process.stdout)
    if (title) {
      console.log(title)
    }
  }
}

exports.getGitUser = () => {
  let name
  let email

  try {
    name = exec('git config --get user.name')
    email = exec('git config --get user.email')
  } catch (e) {}

  name = name && JSON.stringify(name.toString().trim()).slice(1, -1)
  email = email && ' <' + email.toString().trim() + '>'
  return (name || '') + (email || '')
}
