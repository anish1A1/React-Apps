

export default function SubmitForm(answer) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let shouldAnswer = answer.toLowerCase() !== 'james'
            if (shouldAnswer) {
                reject(new Error('Wrong Answer. try Again!!'))
            }
            else {
                resolve();
            }
        }, 1500);
    })
}