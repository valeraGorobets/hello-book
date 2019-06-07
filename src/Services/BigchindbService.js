const driver = require('bigchaindb-driver');

const API_PATH = 'https://test.bigchaindb.com:433/api/v1/';
const methadataTag = 'HelloBookTag';
const defaultState = {
    'Math': 1,
    'Chemistry': 1,
    'Hello Book': 2,
};

export class BigchainDb {
    constructor() {
        this.alice = new driver.Ed25519Keypair();
        this.conn = new driver.Connection(API_PATH);

    }

    sendToDb(obj) {
        const tx = driver.Transaction.makeCreateTransaction(
            obj,
            { metadata1: methadataTag},
            [ driver.Transaction.makeOutput(
                driver.Transaction.makeEd25519Condition(this.alice.publicKey))
            ],
            this.alice.publicKey,
        );

        const txSigned = driver.Transaction.signTransaction(tx, this.alice.privateKey);
        return this.conn.postTransactionCommit(txSigned).catch(() => obj);
    }

    getFromDb() {
        return this.conn.searchMetadata(methadataTag).catch(() => defaultState);
    }
}
