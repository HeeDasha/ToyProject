const oracledb = require('oracledb');

async function getConnection() {
    try {
        const connection = await oracledb.getConnection({
            user: 'system',
            password: '1234',
            connectString: 'localhost/xe'
        });
        return connection;
    } catch (err) {
        console.error('데이터베이스 연결 오류:', err);
        throw err;
    }
}

async function checkUserCredentials(username, password) {
    let connection;
    try {
        connection = await getConnection();

        const result = await connection.execute(
            `SELECT * FROM user_table WHERE ID = :username AND PASSWORD = :password`,
            [username, password],
            { outFormat: oracledb.OUT_FORMAT_OBJECT }
        );

        return result.rows.length > 0;

    } catch (err) {
        console.error('DB 쿼리 오류:', err);
        return false;
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error('DB 연결 닫기 오류:', err);
            }
        }
    }
}

module.exports = {
    checkUserCredentials
};


