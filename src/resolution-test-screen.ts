/*
 * Copyright (C) 2024 brittni and the polar bear LLC.
 *
 * This file is a part of brittni and the polar bear's sketch context explorer project,
 * which is released under the GNU Affero General Public License, Version 3.0.
 * You may not use this file except in compliance with the license.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. See LICENSE or go to
 * https://www.gnu.org/licenses/agpl-3.0.en.html for full license details.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Affero General Public License for more details.
 */

import P5Lib from 'p5';

import { CanvasContext, Color, P5Context, PC_D01625, ScreenHandler } from '@batpb/genart';

import { AspectRatioTestScreen } from './aspect-ratio-test-screen';
import { ScreenNames } from './screen-names';

export class ResolutionTestScreen extends AspectRatioTestScreen {
    public constructor() {
        super(ScreenNames.RESOLUTION_TEST);
        this.lineColor = new Color(PC_D01625);
    }

    public override keyPressed(): void {
        const p5: P5Lib = P5Context.p5;

        if (p5.key === '1') {
            CanvasContext.updateResolution(720);
        } else if (p5.key === '2') {
            CanvasContext.updateResolution(1080);
        } else if (p5.key === '3') {
            CanvasContext.updateResolution(2048);
        } else if (p5.key === '0') {
            ScreenHandler.currentScreen = ScreenNames.ASPECT_RATIO_TEST;
        }
    }
}
