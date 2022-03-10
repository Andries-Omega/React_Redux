import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { addContact, removeContact, updateContact } from "./Contacts/Contacts";

export default function App() {
	const contacts = useSelector((state: RootState) => state.contacts.value);
	const [contactInput, setContactInput] = useState("");
	const [contactUpdate, setContactUpdate] = useState("");
	const dispatch = useDispatch();
	return (
		<div className="p-4">
			{contacts.map((contact) => {
				return (
					<div className=" grid grid-cols-2">
						<p className=" text-black text-base">
							PhoneNumber: {contact.thenumber}
						</p>
						<div className="  ">
							<input
								type="text"
								className=" h-9 focus:outline-none border-blue-500 border-2 rounded-md pl-3"
								placeholder="Enter Contact"
								onChange={(e) => setContactUpdate(e.target.value)}
							/>
							<button
								className=" bg-slate-500 text-white ml-20 mb-6 W-40 h-10 rounded-md hover:bg-slate-700"
								onClick={() =>
									dispatch(
										updateContact({ id: contact.id, newcontact: contactUpdate })
									)
								}
							>
								Update
							</button>
							<button
								className=" bg-red-500 text-white ml-20 mb-6 W-32 h-10 rounded-md hover:bg-red-800"
								onClick={() => dispatch(removeContact(contact.id))}
							>
								Delete
							</button>
						</div>
					</div>
				);
			})}
			<br />
			<div>
				<input
					type="text"
					className=" h-9 focus:outline-none border-blue-500 border-2 rounded-md pl-3"
					placeholder="Enter Contact"
					onChange={(e) => setContactInput(e.target.value)}
				/>
				<button
					className=" bg-blue-500 text-white w-32 h-9 rounded-md shadow-xl ml-2 hover:bg-blue-800"
					onClick={() => {
						if (!contactInput) return;
						dispatch(
							addContact({ id: contacts.length + 1, thenumber: contactInput })
						);
						setContactInput("");
					}}
				>
					Add Contact
				</button>
			</div>
		</div>
	);
}
