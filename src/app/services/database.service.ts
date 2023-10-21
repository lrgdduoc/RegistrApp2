import { Injectable, WritableSignal, signal } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite'




const DB_USERS = 'myuserdb';

export interface user {
  id: number;
  name: string;
  active: number;

}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
  private db!: SQLiteDBConnection;
  private user: WritableSignal<user[]> = signal<user[]>([]);

  constructor() { }

  async initializPlugin() {
    this.db = await this.sqlite.createConnection(
      DB_USERS,
      false,
      'no-encryption',
      1,
      false
    );
    await this.db.open();

    const schema = 'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, active INTEGER DEFAULT 1);';

    await this.db.execute(schema);
    this.loadUser();
    return true;

  }

  getUser(){
    return this.user;
  }

  //crud


  async loadUser() {
    const users = await this.db.query('SELECT * FROM USERS;');
    this.user.set(users.values || []);
  }
  async addUser(name: string) {
    const query = `INSERT INTO users (name) VALUES ('${name}')`; // Usar comillas simples dentro de la consulta SQL
    const result = await this.db.query(query);
  
    await this.loadUser();
    return result;
  }

  async updateUserById(id: string, active: number) {
    const query = `UPDATE users SET active = ${active} WHERE id = ${id}`; // Usar interpolación con comillas invertidas (backticks)
    const result = await this.db.query(query);
    
    await this.loadUser();
    return result;
  }
async deleteUserById(id: string){
  const query = `DELETE FROM users WHERE id=${id}`; // Usar interpolación con comillas invertidas (backticks)
  const result = await this.db.query(query);

  this.loadUser();
  return result;
}

  
}
