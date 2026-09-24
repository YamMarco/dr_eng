import { cQuizzes } from './c';
import type { QuizNode } from './types';

export type { QuizNode, QuizPart, QuizOptions, QuizKind } from './types';

export const allQuizNodes: QuizNode[] = [...cQuizzes];

export function getQuizNode(id: string): QuizNode | undefined {
	return allQuizNodes.find((quiz) => quiz.id === id);
}

export function getQuizNodesByModule(moduleId: string): QuizNode[] {
	return allQuizNodes.filter((quiz) => quiz.module === moduleId);
}
