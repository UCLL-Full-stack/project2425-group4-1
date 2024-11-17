import { Player } from '../model/player';
import { User } from '../model/user';
import database from '../util/database';
/* 

SETUP



/* 

FUNCTIONALITY

*/

const getAllPlayers = async (): Promise<Player[]> => {
    const playersPrisma = await database.player.findMany({
        include: {
            user: true,
        },
    });
    return playersPrisma.map((playerPrisma) => Player.from(playerPrisma));
};

const getPlayerById = (id: number): Player => {
    const player = players.find((player) => player.getId() === id);
    if (!player) {
        throw new Error(`player with id ${id} does not exist.`);
    }
    return player;
};

export default {
    getAllPlayers,
    getPlayerById,
};
