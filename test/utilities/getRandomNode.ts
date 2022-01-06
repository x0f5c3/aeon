import { Locator } from "playwright";

/**
 * Retrieve a random child from a locator.
 */
async function getRandomNode(locator: Locator): Promise<Locator> {
    // Count the number of nodes
    const numberOfNodes = await locator.count()

    // Then get a random index
    // NOTE: locator.nth takes a zero-indexed index, so we need to subtract 1 as
    // locator.count() is one-indexed.
    const randomIndex = Math.floor(Math.random() * numberOfNodes - 1);

    // Then return the index
    return locator.nth(randomIndex);
}

export default getRandomNode;