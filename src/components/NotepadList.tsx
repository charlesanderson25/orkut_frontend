// import uuid from "react-uuid";

// const notepads = [
//   {
//     id: uuid(),
//     tittle: "Primeiro Notepad",
//     subtitle: "Primeiro Notepad cadastrado",
//     createdAt: new Date(),
//   },

//   {
//     id: uuid(),
//     tittle: "Segundo Notepad",
//     subtitle: "Segundo Notepad cadastrado",
//     createdAt: new Date(),
//   },
// ];

// Componente Filho
// const NotepadList = () => {
//   return (
//     <div className="p-5 m-5 text-white bg-darkTheme">
//       <h2 className="font-bold">NotepadList</h2>
//       {notepads.map((notepad) => {
//         return (
//           <div key={notepad.id} className="border-b p-2">
//             <h1 className="text-lg font-bold">{notepad.tittle}</h1>
//             <h4 className="italic">{notepad.subtitle}</h4>
//             <p>{notepad.createdAt.toLocaleDateString()}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// Componente Pai
// const NotepadBody = () => {
//   return (
//     <div className="bg-backGroundColorDarkTheme h-screen">
//       <NotepadList />
//     </div>
//   );
// };

// export default NotepadBody;
