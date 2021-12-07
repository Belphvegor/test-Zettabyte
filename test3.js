/**
 * Direction:
 * Remove key that have null or undefined value
 *
 * Expected Result:
 * [
 *   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
 *   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
 * ]
 */
const data = [{
    session_name: 'first test',
    classes: [{
      class_name: undefined,
      students: [{
        student_name: 'budi'
      }]
    }]
  },
  {
    session_name: null,
    classes: [{
      class_name: 'second class',
      students: [{
        student_name: 'adi'
      }]
    }]
  },
];

function result(data) {
  const removeEmpty = (obj) => {
    Object.keys(obj).forEach(key => {
      if (obj[key] && typeof obj[key] === 'object') {
        removeEmpty(obj[key]);
      }
      if ((!obj[key] && obj[key] !== 0) || (typeof obj[key] === 'object' && Object.keys(obj[key]).length === 0)) {
        delete obj[key];
      }
    });
    return obj;
  };

  let res = removeEmpty(data)
  return res;
}

console.log(result(data));