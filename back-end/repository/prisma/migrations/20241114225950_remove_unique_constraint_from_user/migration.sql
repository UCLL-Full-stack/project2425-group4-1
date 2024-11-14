-- DropIndex
DROP INDEX "Player_userId_key";

-- CreateIndex
CREATE INDEX "Player_userId_idx" ON "Player"("userId");
