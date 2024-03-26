const getLeaderboardGame = async (network, gameObjectId) => {
  const game = await getGame(network, gameObjectId);
  if (!game) {
    throw new Error(`Could not find game with gameObjectId: ${gameObjectId}`);
  }
  const leaderboardGame = await leaderboardService.getLeaderboardGame(
    network,
    gameObjectId
  );
  if (!leaderboardGame) {
    throw new Error(
      `Could not find leaderboard game with gameObjectId: ${gameObjectId}`
    );
  }
  return leaderboardGame;
};  
