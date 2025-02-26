export type Lesson = {
  id: string;
  title: string;
  description: string;
  duration: number | string;
	is_read: boolean;
	tags: string[];
};

export type Tag = {
	id: string;
	text: string;
};