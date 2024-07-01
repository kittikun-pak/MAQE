import * as readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question(`Please input bot command: \n`, (command) => {
    const commandSet: RegExp = /(W\d+|R)/g
    const commands: string[] | null = command.match(commandSet)

    let x: number = 0
    let y: number = 0
    let direction: string = 'N'

    function turnRight(): void {
        if (direction === 'N') {
            direction = 'E'
        }
        else if (direction === 'E') {
            direction = 'S'
        }
        else if (direction === 'S') {
            direction = 'W'
        }
        else if (direction === 'S') {
            direction = 'N'
        }
    }

    function turnLeft(): void {
        if (direction === 'N') {
            direction = 'W'
        }
        else if (direction === 'W') {
            direction = 'S'
        }
        else if (direction === 'S') {
            direction = 'E'
        }
        else if (direction === 'E') {
            direction = 'N'
        }
    }

    function moveForward(steps: number): void {
        if (direction === 'N') {
            y += steps
        }
        else if (direction === 'E') {
            x += steps
        }
        else if (direction === 'S') {
            y -= steps
        }
        else if (direction === 'W') {
            x -= steps
        } 
    }

    if(commands instanceof Array) {
        commands.forEach(cmd => {
            switch(true) {
                case cmd === 'R':
                    turnRight()
                    break
                case cmd === 'L':
                    turnLeft()
                    break
                case cmd.startsWith('W'):
                    const steps = parseInt(cmd.substring(1))
                    moveForward(steps)
                    break
                default:
                    break
            }
        })

        console.log(`X: ${x} Y: ${y} Direction: ${direction}`)
    }

    rl.close()
})