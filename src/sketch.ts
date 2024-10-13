/*
 * Copyright (C) 2023-2024 brittni and the polar bear LLC.
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

import '../assets/styles/sketch.css';

import {
    ASPECT_RATIOS,
    CanvasContext,
    P5Context,
    ScreenHandler
} from '@batpb/genart';

import { AspectRatioTestScreen } from './aspect-ratio-test-screen';
import { ResolutionTestScreen } from './resolution-test-screen';

function sketch(p5: P5Lib): void {
    p5.setup = (): void => {
        P5Context.initialize(p5);
        CanvasContext.buildCanvas(ASPECT_RATIOS.SQUARE, 720, p5.WEBGL, true);
        const aspectScreen: AspectRatioTestScreen = new AspectRatioTestScreen();
        const resolutionScreen: ResolutionTestScreen = new ResolutionTestScreen();
        ScreenHandler.addScreen(aspectScreen);
        ScreenHandler.addScreen(resolutionScreen);
        ScreenHandler.currentScreen = aspectScreen.NAME;
    };

    p5.draw = (): void => {
        ScreenHandler.draw();
    };

    p5.keyPressed = (): void => {
        ScreenHandler.keyPressed();
    };

    p5.mousePressed = (): void => {
        console.log(`mouseX = ${p5.mouseX}; mouseY = ${p5.mouseY}`);
        ScreenHandler.mousePressed();
    };

    p5.windowResized = (): void => {
        CanvasContext.resizeCanvas();
    };
}

new P5Lib(sketch);
