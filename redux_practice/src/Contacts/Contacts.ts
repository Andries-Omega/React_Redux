import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ContactDetails {
	value: [
		{
			id: number;
			thenumber: string;
		}
	];
}
const initialState: ContactDetails = {
	value: [
		{
			id: 0,
			thenumber: "",
		},
	],
};
export const contactSlice = createSlice({
	name: "contact",
	initialState,
	reducers: {
		addContact: (state, action: PayloadAction<any>) => {
			state.value.push(action.payload);
		},
		removeContact: (state, action: PayloadAction<number>) => {
			state.value = state.value.filter((v) => v.id !== action.payload);
		},
		updateContact: (state, action: PayloadAction<any>) => {
			state.value.map((contact) => {
				if (contact.id === action.payload.id) {
					contact.thenumber = action.payload.newcontact;
					return;
				}
			});
		},
	},
});

export const { addContact } = contactSlice.actions;
export const { removeContact } = contactSlice.actions;
export const { updateContact } = contactSlice.actions;
export default contactSlice.reducer;
