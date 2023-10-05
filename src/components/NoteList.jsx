import moment from "moment/moment";
import React from "react";
import { useParams } from "react-router-dom";
import trashIcon from "../assets/trash.svg";
import useFirestore from "../hooks/useFirestore";
import useTheme from "../hooks/useTheme";

export default function NoteList() {
  let { getCollection, deleteDocument } = useFirestore();
  let { id } = useParams();
  let { isDark } = useTheme();
  let {
    error,
    loading,
    data: notes,
  } = getCollection("notes", ["bookId", "==", id]);

  let deleteNote = async (id) => {
    await deleteDocument("notes", id);
  };
  return (
    <div>
      {!!notes.length &&
        notes.map((note) => (
          <div className=" mt-4" key={note.id}>
            <div className="flex">
              {/* profile */}
              <div>
                <img
                  src="https://d27v83ov1up738.cloudfront.net/user-profiles/zZR327gfuRcilZzkHjPyRIam50MpjeUoyVnGpy4W.jpg"
                  alt=""
                  className="w-12 h-12 rounded-full mt-4 mx-4"
                />
              </div>
              {/* body */}
              <div
                className={`flex flex-col border-1 shadow-sm p-3 rounded-lg min-w-[600px] ${
                  isDark
                    ? "bg-slate-900 text-white border-none"
                    : " bg-slate-50"
                }  `}
              >
                <div>
                  <div className="flex justify-between">
                    <div>
                      <p className="font-bold">Aung Pyae Kyaw</p>
                      <div className="text-gray-400 font-sans font-extralight">
                        {moment(note?.date?.seconds * 1000).fromNow()}
                      </div>
                    </div>
                    <div onClick={() => deleteNote(note.id)}>
                      <img src={trashIcon} />
                    </div>
                  </div>

                  <div className="mt-3">{note.body}</div>
                </div>
              </div>
            </div>
          </div>
        ))}

      {notes && !notes.length && (
        <p
          className={`text-center text-xl py-3 ${
            isDark ? "text-white" : "text-gray-500"
          }`}
        >
          No comments yet...
        </p>
      )}
    </div>
  );
}
