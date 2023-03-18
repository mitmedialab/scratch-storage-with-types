declare let jobsActive: number;
declare const complete: any[];
declare let intervalId: any;
/**
 * Register a step function.
 *
 * Step checks if there are completed jobs and if there are sends them to the
 * parent. Then it checks the jobs count. If there are no further jobs, clear
 * the step.
 */
declare function registerStep(): void;
/**
 * Receive a job from the parent and fetch the requested data.
 * @param {object} options.job A job id, url, and options descriptor to perform.
 */
declare function onMessage({ data: job }: object): void;
