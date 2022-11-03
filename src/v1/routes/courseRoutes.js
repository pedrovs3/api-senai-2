import { Router } from 'express';
import courseController from '../controllers/CourseController';
import bodyContent from '../middlewares/bodyContent';
import idExistCourses from '../middlewares/idExistCourses';

const routes = Router();

routes.get('/', courseController.index);
routes.get('/:id', idExistCourses, courseController.show);
routes.post('/', bodyContent, courseController.store);
routes.put('/:id', bodyContent, idExistCourses, courseController.update);
routes.delete('/:id', idExistCourses, courseController.delete);

export default routes;
