import { ERRORS_MESSAGE, SUCCESSFUL_MESSAGE } from '../config/messages';
import Course from '../models/Course';

class CourseController {
  async index(req, res) {
    try {
      const courses = await Course.getAllCourses();
      res.status(200).json({ courses });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const course = await Course.getCourseById(id);

      res.status(200).json({ course });
    } catch (error) {
      res.status(500).json({ error: ERRORS_MESSAGE.INTERNAL_ERROR_DB });
    }
  }

  async store(req, res) {
    try {
      const { body } = req;

      const insertCourse = await Course.insertCourse(body);

      res.status(200).json({ message: SUCCESSFUL_MESSAGE.INSERT_ITEM });
    } catch (error) {
      res.status(400).json({ error: ERRORS_MESSAGE.INTERNAL_ERROR_DB });
    }
  }

  async update(req, res) {
    try {
      const { body } = req;
      const { id } = req.params;

      const updateString = Object.entries(body).map(([key, value]) => `${key} = '${value}',`).join(' ').slice(0, -1);

      const updatedCourse = Course.update(updateString, id);

      res.status(200).json({ message: SUCCESSFUL_MESSAGE.UPDATE_ITEM });
    } catch (error) {
      res.status(500).json({ error: ERRORS_MESSAGE.INTERNAL_ERROR_DB });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      await Course.delete(id);

      res.status(200).json({ message: SUCCESSFUL_MESSAGE.DELETE_ITEM });
    } catch (error) {
      res.status(500).json({ error: ERRORS_MESSAGE.INTERNAL_ERROR_DB });
    }
  }
}

export default new CourseController();
