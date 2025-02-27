import type { FreModelUnit } from '@freon4dsl/core';

export interface ModelInfo {
	// name of the currently shown model
	modelName: string
	units: FreModelUnit[]
}

export const modelInfo: ModelInfo = $state({
	modelName: 'aModel',
	units: []
})

export interface serverInfo {
	allModelNames: string[]
}
export const serverInfo: serverInfo = $state({
	allModelNames: []
})

export interface EditorInfo {
	currentUnit: FreModelUnit | undefined;
}
export const editorInfo: EditorInfo = $state({
	currentUnit: undefined
})

export let progressIndicatorShown = $state({ value: false });
export let noUnitAvailable = $state({ value: true });
