import { cQuizzes } from './c';
import { eQuizzes } from './e';
import { gQuizzes } from './g';
import { cobeQuizzes } from './cobe';
import type { QuizNode } from './types';

export type { QuizNode, QuizPart, QuizOptions, QuizKind } from './types';

export const allQuizNodes: QuizNode[] = [...cQuizzes, ...eQuizzes, ...gQuizzes, ...cobeQuizzes];

export function getQuizNode(id: string): QuizNode | undefined {
	return allQuizNodes.find((quiz) => quiz.id === id);
}

export function getQuizNodesByModule(moduleId: string): QuizNode[] {
	return allQuizNodes.filter((quiz) => quiz.module === moduleId);
}
