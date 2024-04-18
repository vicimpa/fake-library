<script lang="ts">
  import { Button, NavItem } from "@sveltestrap/sveltestrap";
  import Layout from "./layout/Layout.svelte";
  import EditBook, { type EditBookState } from "./components/EditBook.svelte";
  import Library from "./components/Library.svelte";
  import { deleteeBook } from "./store/bookStore";

  let editBook: EditBookState | null;
</script>

<Layout on:create={() => editBook?.create()}>
  <Library>
    <slot slot="footer" let:book>
      <Button color="warning" on:click={() => editBook?.edit(book)}>
        {"Edit"}
      </Button>
      <Button color="danger" on:click={() => deleteeBook(book)}>
        {"Delete"}
      </Button>
    </slot>
  </Library>

  <slot slot="header">
    <NavItem>
      <Button color="primary" on:click={() => editBook?.create()}>
        Create
      </Button>
    </NavItem>
  </slot>
</Layout>

<EditBook bind:state={editBook} />
