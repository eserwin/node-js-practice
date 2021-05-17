const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick} ms`);

const codeBlocker = () => {
    let i = 0;
    while (i < 1000000000) {
        i++
    }

    return 'synchronous 1'
}

const codeBlockerPromiseResolve = () => {
    return Promise.resolve().then((v) => {

        let i = 0;
        while (i < 1000000000) {
            i++
        }

        return 'billion loops done'
    })

}

const codeBlockerNewPromise = () => {
    return new Promise((resolve, reject) => {
        let i = 0;
        while (i < 1000000000) {
            i++
        }

        resolve('billion loops done')
    })

}

log('synchronous 1')
codeBlockerPromiseResolve().then(t => {
    log(t)
});
log('synchronous 2')

