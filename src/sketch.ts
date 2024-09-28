/*
 * Copyright (C) 2023-2024 brittni and the polar bear LLC.
 *
 * This file is a part of brittni and the polar bear's canvas context explorer project,
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

import { ASPECT_RATIOS, CanvasContext, Color, PC_7A00F5, SketchContext } from '@batpb/genart';

import '../assets/styles/sketch.css';

function sketch(p5: P5Lib): void {
    p5.setup = (): void => {
        SketchContext.initialize(p5);
        CanvasContext.buildCanvas(ASPECT_RATIOS.SQUARE, 720);
    };

    p5.draw = (): void => {
        p5.background(0);
        p5.rectMode(p5.CENTER);

        const colorA: Color = new Color(p5.color(255, 0, 255));
        p5.fill(colorA.color);
        p5.rect(CanvasContext.mapXPercentage(0.5), 0, 250, 250);

        const colorB: Color = new Color(p5.color(0, 0, 255));
        p5.fill(colorB.color);
        p5.rect(CanvasContext.mapXPercentage(0.5), 0, 75, 75);

        p5.stroke((new Color(PC_7A00F5)).color);
        p5.strokeWeight(CanvasContext.defaultStroke);
        p5.line(
            CanvasContext.mapXPercentage(0.1),
            CanvasContext.minHeight,
            CanvasContext.mapXPercentage(0.1),
            CanvasContext.maxHeight)
        ;
        p5.line(
            CanvasContext.mapXPercentage(0.9),
            CanvasContext.minHeight,
            CanvasContext.mapXPercentage(0.9),
            CanvasContext.maxHeight
        );
    };

    p5.keyPressed = (): void => {
        if (p5.key === '1') {
            CanvasContext.updateAspectRatio(ASPECT_RATIOS.SQUARE);
        } else if (p5.key === '2') {
            CanvasContext.updateAspectRatio(ASPECT_RATIOS.TIKTOK_PHOTO);
        } else if (p5.key === '3') {
            CanvasContext.updateAspectRatio(ASPECT_RATIOS.SOCIAL_VIDEO);
        } else if (p5.key === '0') {
            CanvasContext.updateResolution(720);
        } else if (p5.key === '9') {
            CanvasContext.updateResolution(1080);
        } else if (p5.key === '8') {
            CanvasContext.updateResolution(2048);
        }
    };

    p5.windowResized = (): void => {
        CanvasContext.resizeCanvas();
    };
}

new P5Lib(sketch);
