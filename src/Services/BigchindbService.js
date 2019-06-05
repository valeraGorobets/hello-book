const driver = require('bigchaindb-driver');

export function sendToDb(obj) {
    const API_PATH = 'https://test.bigchaindb.com/api/v1/';
    const alice = new driver.Ed25519Keypair();
    const tx = driver.Transaction.makeCreateTransaction(
        obj,
        { what: 'My first BigchainDB transaction' },
        [ driver.Transaction.makeOutput(
            driver.Transaction.makeEd25519Condition(alice.publicKey))
        ],
        alice.publicKey,
    );

    const txSigned = driver.Transaction.signTransaction(tx, alice.privateKey);
    const conn = new driver.Connection(API_PATH);

    return conn.postTransactionCommit(txSigned);
}
