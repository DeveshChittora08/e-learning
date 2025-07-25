import { useState } from 'react';
import PropTypes from 'prop-types';
import { coursesData } from '../../data';
import { CourseContext } from './CourseContext';

const CourseContextProvider = ({ children }) => {
  const [courses] = useState(coursesData);

  return (
    <CourseContext.Provider value={{ courses }}>
      {children}
    </CourseContext.Provider>
  );
};

CourseContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CourseContextProvider;
