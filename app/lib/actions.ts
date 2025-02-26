'use server';

import postgres from 'postgres';
import { revalidatePath } from 'next/cache';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function markAsRead(id: string) {
  await sql`UPDATE lessons SET isRead = true WHERE id = ${id}`;
  revalidatePath('/gallery');
}

export async function markAsUnread(id: string) {
	await sql`UPDATE lessons SET isRead = false WHERE id = ${id}`;
	revalidatePath('/gallery');
}