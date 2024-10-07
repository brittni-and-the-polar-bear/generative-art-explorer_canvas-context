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

import {
    ASPECT_RATIOS,
    AspectRatioHandler,
    CanvasContext, Circle,
    Color,
    CoordinateMapper,
    PC_7A00F5,
    SketchContext
} from '@batpb/genart';

import '../assets/styles/sketch.css';

function sketch(p5: P5Lib): void {
    let circle: Circle;

    p5.setup = (): void => {
        SketchContext.initialize(p5);
        CanvasContext.buildCanvas(ASPECT_RATIOS.SQUARE, 720, p5.WEBGL, true);
        Circle.minDiameter = 50;
        Circle.maxDiameter = 250;
        circle = new Circle();
    };

    p5.draw = (): void => {
        p5.background(0);
        p5.rectMode(p5.CENTER);

        const colorA: Color = new Color(p5.color(255, 0, 255));
        p5.fill(colorA.color);
        p5.noStroke();
        p5.rect(CoordinateMapper.centerX, CoordinateMapper.centerY, 250, 250);

        const colorB: Color = new Color(p5.color(0, 0, 255));
        p5.fill(colorB.color);
        p5.rect(CoordinateMapper.centerX, CoordinateMapper.centerY, 75, 75);

        p5.stroke((new Color(PC_7A00F5)).color);
        p5.strokeWeight(CanvasContext.defaultStroke);
        p5.line(
            CoordinateMapper.mapRatioToCanvasX(0.1),
            CoordinateMapper.minY,
            CoordinateMapper.mapRatioToCanvasX(0.1),
            CoordinateMapper.maxY
        );
        p5.line(
            CoordinateMapper.mapRatioToCanvasX(0.9),
            CoordinateMapper.minY,
            CoordinateMapper.mapRatioToCanvasX(0.9),
            CoordinateMapper.maxY
        );

        circle.draw();
    };

    p5.keyPressed = (): void => {
        if (p5.key === '1') {
            CanvasContext.updateAspectRatio(ASPECT_RATIOS.SQUARE);
        } else if (p5.key === '2') {
            CanvasContext.updateAspectRatio(ASPECT_RATIOS.TIKTOK_PHOTO);
        } else if (p5.key === '3') {
            CanvasContext.updateAspectRatio(ASPECT_RATIOS.SOCIAL_VIDEO);
        } else if (p5.key === '4') {
            CanvasContext.updateAspectRatio(
                AspectRatioHandler.buildAspectRatio(7, 5) ?? ASPECT_RATIOS.SQUARE
            );
        } else if (p5.key === '0') {
            CanvasContext.updateResolution(720);
        } else if (p5.key === '9') {
            CanvasContext.updateResolution(1080);
        } else if (p5.key === '8') {
            CanvasContext.updateResolution(2048);
        }
    };

    p5.mousePressed = (): void => {
        console.log(`mouseX = ${p5.mouseX}; mouseY = ${p5.mouseY}`);
    };

    p5.windowResized = (): void => {
        CanvasContext.resizeCanvas();
    };
}

new P5Lib(sketch);
