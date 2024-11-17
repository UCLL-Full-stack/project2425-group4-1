import { Player as PlayerPrisma, User as UserPrisma } from '@prisma/client';
import { User } from './user';

export class Player {
    private id?: number;
    private name: string;
    private statistics: string; // still needs to be expended upon
    private playerClass: string; // will later be a Class type
    private currency: number;
    private user: User;

    constructor(player: {
        id?: number;
        name: string;
        statistics: string;
        playerClass: string;
        currency: number;
        user: User;
    }) {
        this.validate(player);

        this.id = player.id;
        this.name = player.name;
        this.statistics = player.statistics;
        this.playerClass = player.playerClass;
        this.currency = player.currency;
        this.user = player.user;
    }

    getId(): number | undefined {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getStatistics(): string {
        return this.statistics;
    }

    getClass(): string {
        return this.playerClass;
    }

    getCurrency(): number {
        return this.currency;
    }

    getUser(): User {
        return this.user;
    }

    validate(player: {
        name: string;
        statistics: string;
        playerClass: string;
        currency: number;
        user: User;
    }) {
        if (!player.name) {
            throw new Error('Name is required.');
        }
        if (!player.statistics) {
            throw new Error('Statistics are required.');
        }
        if (!player.playerClass) {
            throw new Error('Class is required.');
        }
        if (player.currency < 0) {
            throw new Error('Currency cannot be negative.');
        }
        if (!player.user) {
            throw new Error('A correct user is required.');
        }
    }

    static from({
        id,
        name,
        statistics,
        class: class,
        currency,
        user,
    }: PlayerPrisma & { user: User }) {
        return new Player({
            id,
            name,
            statistics,
            playerClass,
            currency,
            user,
        });
    }
}
