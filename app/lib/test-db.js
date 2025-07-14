import postgres from 'postgres';

const sql = postgres('postgres://postgres:4yJF034qGFDUkHCG@aws-0-us-east-1.pooler.supabase.com:6543/postgres?sslmode=require');

async function testConnection() {
  try {
    const result = await sql`SELECT NOW() AS now`;
    console.log('Database connected successfully:', result);
  } catch (error) {
    console.error('Database connection failed:', error);
  } finally {
    await sql.end();  // close the connection pool
  }
}

testConnection();
