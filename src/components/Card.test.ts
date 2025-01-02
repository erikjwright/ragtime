import { expect, test } from "bun:test";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import Card from "@/components/Card.astro";

test("Card with slots", async () => {
	const container = await AstroContainer.create();
	const result = await container.renderToString(Card);

	expect(result).toContain("Card");
});
