import express from "express";

export const getNotes = (req, resp) => {
  resp.status(200).send("fetching success\n");
};

export const createNotes = (req, resp) => {
  resp.status(200).json({ message: "note created done" });
};

export const updateNotes = (req, resp) => {
  resp.status(200).json({ message: "note update done" });
};

export const deleteNotes = (req, resp) => {
  resp.status(204).json({ message: "note delete done" });
};
