import { TYPES } from '../constants';

export const root = () => '/';
export const admin = () => '/admin';

export const eventCalendar = () => `/${TYPES.EVENT}/calendar`;
export const eventDaySingle = day => `/${TYPES.EVENT}/calendar/${day || ':day'}`;
export const eventArticleNew = day => `/${TYPES.EVENT}/calendar/${day || ':day'}/new`;
export const eventArticle = (day, id) => `/${TYPES.EVENT}/article/${day || ':day'}/${id || ':id'}`;
export const eventInstructors = () => `/${TYPES.EVENT}/instructors`;

export const meditationSeances = () => `/${TYPES.MEDITATION}/seances`;
export const meditationArticle = () => `/${TYPES.MEDITATION}/article`;

export const floating = () => `/${TYPES.FLOATING}`;

export const massage = () => `/${TYPES.MASSAGE}`;

export const foodArticle = () => `/${TYPES.FOOD}/article`;

export const gameTrain = () => `/${TYPES.GAME_TRAIN}`;

export const alfaGravity = () => `/${TYPES.ALFAGRAVITY}`;
export const alfaGravityStore = () => `/${TYPES.ALFAGRAVITY}/store`;

export const contacts = () => '/contacts';
export const blog = () => `/${TYPES.BLOG}`;

export const pageNotFound = () => '*';
