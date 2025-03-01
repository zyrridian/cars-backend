import { Request, Response } from "express";
import Car from "../models/car.model";

export const getAllCars = async (req: Request, res: Response): Promise<any> => {
  const cars = await Car.findAll();
  res.json(cars);
};

export const getCarById = async (req: Request, res: Response): Promise<any> => {
  const car = await Car.findByPk(req.params.id);
  if (!car) return res.status(404).json({ error: "Car not found" });
  res.json(car);
};

export const createCar = async (req: Request, res: Response): Promise<any> => {
  const { brand, model, year } = req.body;
  const newCar = await Car.create({ brand, model, year });
  res.status(201).json(newCar);
};

export const updateCar = async (req: Request, res: Response): Promise<any> => {
  const { brand, model, year } = req.body;
  const car = await Car.findByPk(req.params.id);
  if (!car) return res.status(404).json({ error: "Car not found" });

  await car.update({ brand, model, year });
  res.json(car);
};

export const deleteCar = async (req: Request, res: Response): Promise<any> => {
  const car = await Car.findByPk(req.params.id);
  if (!car) return res.status(404).json({ error: "Car not found" });

  await car.destroy();
  res.json({ message: "Car deleted" });
};
