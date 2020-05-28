import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as CourseACtions from "../../store/actions/course";
// import { Container } from './styles';

const Sidebar = ({ modules, toggleLesson }) => (
  <aside>
    {modules.map((module) => (
      <div key={module.id}>
        <strong>{module.title}</strong>
        <ul>
          {module.lessons.map((lesson) => (
            <li key={lesson.id}>
              {lesson.title}
              <button onClick={() => toggleLesson(module, lesson)}>
                Selecionar
              </button>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </aside>
);
const MapStateToProps = (state) => ({
  modules: state.course.modules,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CourseACtions, dispatch);

export default connect(MapStateToProps, mapDispatchToProps)(Sidebar);
