export type GarrafaType = {
    id: string;
    volume: number;
    cores: Cores[];
}

type Cores = "Verde" | "Amarelo" | "Vermelho";