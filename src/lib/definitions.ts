export type Lesson = {
  id: string;
  title: string;
  description: string;
  duration: number;
	path: string;
	tags: string[];
};

export type Tag = {
	id: string;
	text: string;
};