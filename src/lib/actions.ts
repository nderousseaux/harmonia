'use server';

import postgres from 'postgres';
import { revalidatePath } from 'next/cache';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function markAsRead(id: string, isRead: boolean) {
  await sql`UPDATE lessons SET is_read = ${!isRead} WHERE id = ${id}`;
  revalidatePath('/lecons');
}