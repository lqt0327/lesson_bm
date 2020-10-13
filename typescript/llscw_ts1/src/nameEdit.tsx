import * as React from 'react';

interface Props {
    userName: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const NameEditComponent = (props: Props) => (
    <>
        <label>Update name:</label>
        <input type="text" value={props.userName} onChange={props.onChange} />
    </>
)