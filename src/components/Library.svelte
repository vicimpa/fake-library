<script lang="ts">
  import {
    Card,
    CardBody,
    CardFooter,
    Col,
    Container,
    Row,
  } from "@sveltestrap/sveltestrap";
  import { bookStore } from "../store/bookStore";
</script>

<Container>
  <Row>
    {#each $bookStore as book}
      <Col lg={3} md={4} sm={4} xs={6}>
        <Card>
          <CardBody>
            <p>
              <strong>Title:</strong>
              {book.title}
            </p>
            <p>
              <strong>Author:</strong>
              {book.author}
            </p>
            <p>
              <strong>Pages:</strong>
              {book.pages}
            </p>
            <p>
              <strong>Read:</strong>
              {book.isRead ? "Yes" : "No"}
            </p>
          </CardBody>

          <CardFooter>
            <slot name="footer" {book} />
          </CardFooter>
        </Card>
      </Col>
    {/each}
  </Row>
</Container>
