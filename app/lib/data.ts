import postgres from 'postgres';
import {
  Lesson,
  Tag
} from './definitions';

import { formatDuration } from './utils';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });


export async function fetchLessonById(id: string) {
  try {

    const [lessonData, tags] = await Promise.all([
      sql<Lesson[]>`
      SELECT
        lessons.id,
        lessons.title,
        lessons.description,
        lessons.duration,
        lessons.is_read
      FROM lessons
      WHERE lessons.id = ${id};
      `,
      fetchTagsByLesson(id)
    ]);


    const lesson = lessonData.map((lesson) => ({
      ...lesson,
      duration: formatDuration(lesson.duration.toString()),
      tags
    }));


    return lesson[0];
  }
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch lesson.');
  }
}

export async function fetchLessons() {
  try {
    const data = await sql<Lesson[]>`
      SELECT
        lessons.id,
        lessons.title,
        lessons.description,
        lessons.duration,
        lessons.is_read
      FROM lessons;
    `;

    const lessons = data.map((lesson) => ({
      ...lesson,
      duration: formatDuration(lesson.duration.toString())
    }));


    return lessons;
  }
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch lessons.');
  }
}

export async function fetchTagsByLesson(lesson_id: string) {
  try {
    const data = await sql<Tag[]>`
      SELECT
        tags.text
      FROM tags
      JOIN lesson_tags ON tags.id = lesson_tags.tag_id
      WHERE lesson_tags.lesson_id = ${lesson_id};
    `;

    return data.map((tag) => tag.text);
  }
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch tag.');
  }

}