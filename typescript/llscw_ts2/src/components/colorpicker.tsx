import * as React from 'react';
import { Color } from '../model/color';

interface Props {
    color: Color;
    onColorUpdated: (color: Color) => void;
}

export const ColorPicker = (props: Props) => (
    <div>
        <input
            type="range"
            min="0"
            max="255"
            value={props.color.red}
            onChange={event =>
                props.onColorUpdated({
                    red: +event.target.value,
                    green: props.color.green,
                    blue: props.color.blue
                })
            }
        />
        {props.color.red}
    </div>
)