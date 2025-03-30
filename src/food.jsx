// export default function Food({ isDone, task, time }) {
//   if (isDone === true) {
//     return (
//       <li>
//         khabar: {task} {time}
//       </li>
//     );
//   } else {
//     return (
//       <li>
//         {" "}
//         khabar: {task} {time}{" "}
//       </li>
//     );
//   }
// }

// tarnari oparetor
export default function Food({ task, isDone }) {
  return isDone ? <li>done:{task} </li> : <li>pending: {task} </li>;
}

// export default function Food({ task, isDone }) {
//   return isDone ? <li>done: {task}</li> : <li>Pending: {task}</li>;
// }
