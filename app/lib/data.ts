import postgres from 'postgres';
import {
  Lesson,
  Tag
} from './definitions';


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
        lessons.is_read,
        lessons.path
      FROM lessons
      WHERE lessons.id = ${id};
      `,
      fetchTagsByLesson(id)
    ]);


    const lesson = lessonData.map((lesson) => ({
      ...lesson,
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
    const lessons = await sql<Lesson[]>`
      SELECT
        lessons.id,
        lessons.title,
        lessons.description,
        lessons.duration,
        lessons.path,
        lessons.is_read
      FROM lessons
      ORDER BY lessons.id DESC;
    `;


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