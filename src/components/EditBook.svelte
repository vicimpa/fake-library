<script context="module" lang="ts">
  export type EditBookState = {
    edit(book: Book): void;
    create(): void;
    close(): void;
    save(): void;
  };
</script>

<script lang="ts">
  import {
    Button,
    FormGroup,
    Input,
    Label,
    Offcanvas,
  } from "@sveltestrap/sveltestrap";
  import { Book, bookStore, saveBook } from "../store/bookStore";

  const empty = new Book();
  let book: Book | null = null;

  export let state: EditBookState | null = null;

  $: {
    if (!state) {
      state = {
        create() {
          book = new Book();
        },
        edit(editBook) {
          book = editBook;
        },
        close() {
          book = null;
        },
        save() {
          if (book) {
            saveBook(book);
            book = null;
          }
        },
      };
    }
  }

  $: editBook = book ?? empty;
  $: isNew = book ? $bookStore.indexOf(book) === -1 : false;
</script>

<Offcanvas scroll isOpen={!!book} toggle={() => state?.close()} backdrop>
  <slot slot="header">
    <h3>
      {#if isNew}
        Creating book
      {:else}
        Editing book
      {/if}
    </h3>
    <p>{book?.title ?? "Untitled"}</p>
  </slot>

  <FormGroup>
    <Label>Title</Label>
    <Input bind:value={editBook.title} />
  </FormGroup>

  <FormGroup>
    <Label>Author</Label>
    <Input bind:value={editBook.author} />
  </FormGroup>

  <FormGroup>
    <Label>Pages</Label>
    <Input type="number" class="right" bind:value={editBook.pages} />
  </FormGroup>

  <FormGroup>
    <Input type="switch" bind:checked={editBook.isRead} label="Is Read" />
  </FormGroup>

  <FormGroup>
    <Button on:click={() => state?.close()} color="danger">
      {"Cancel"}
    </Button>
    <Button on:click={() => state?.save()} color="success">
      {"Save"}
    </Button>
  </FormGroup>
</Offcanvas>
