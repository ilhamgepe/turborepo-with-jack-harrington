import create from "zustand";

export type Movie = {
  title: string;
  image: string;
};

export type IStore = {
  movies: Movie[];
  addMovie: (movie: Movie) => void;
};

export const useStore = create<IStore>((set) => ({
  movies: [],
  addMovie: (movie) => set((state) => ({ movies: [...state.movies, movie] })),
}));
