import { CacheManager, Character, DbCacheAdapter, IDatabaseCacheAdapter } from "@elizaos/core";

export async function initializeDbCache(
  character: Character,
  db: IDatabaseCacheAdapter
) {
  const cacheAdapter = new DbCacheAdapter(db, character.id);
  
  await cacheAdapter.delete('memory');
  await cacheAdapter.delete('conversation');
  await cacheAdapter.delete('state');
  
  const cache = new CacheManager(cacheAdapter);
  
  return cache;
}